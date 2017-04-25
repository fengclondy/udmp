

package cn.com.git.udmp.modules.sys.utils;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;

import cn.com.git.udmp.common.mapper.JsonMapper;
import cn.com.git.udmp.common.utils.CacheUtils;
import cn.com.git.udmp.common.utils.SpringContextHolder;
import cn.com.git.udmp.modules.sys.dao.DictDao;
import cn.com.git.udmp.modules.sys.entity.Dict;

/**
 * 字典工具类
 * @author Spring Cao
 * @version 2013-5-29
 */
public class DictUtils {
	
	private static DictDao dictDao = SpringContextHolder.getBean(DictDao.class);

	public static final String CACHE_DICT_MAP = "dictMap";
	public static final String CACHE_OTHERDICT_MAP = "otherdictMap";
	
	public static String getDictLabel(String value, String type, String defaultValue){
		if (StringUtils.isNotBlank(type) && StringUtils.isNotBlank(value)){
			for (Dict dict : getDictList(type)){
				if (type.equals(dict.getType()) && value.equals(dict.getValue())){
					return dict.getLabel();
				}
			}
		}
		return defaultValue;
	}
	
	public static String getOtherDictLabel(String value, String type, String defaultValue){
	    if (StringUtils.isNotBlank(type) && StringUtils.isNotBlank(value)){
	        for (Dict dict : getOtherDictList(type)){
	            if (type.equals(dict.getType()) && value.equals(dict.getValue())){
	                return dict.getLabel();
	            }
	        }
	    }
	    return defaultValue;
	}
	
	public static String getDictLabels(String values, String type, String defaultValue){
		if (StringUtils.isNotBlank(type) && StringUtils.isNotBlank(values)){
			List<String> valueList = Lists.newArrayList();
			for (String value : StringUtils.split(values, ",")){
				valueList.add(getDictLabel(value, type, defaultValue));
			}
			return StringUtils.join(valueList, ",");
		}
		return defaultValue;
	}

	public static String getDictValue(String label, String type, String defaultLabel){
		if (StringUtils.isNotBlank(type) && StringUtils.isNotBlank(label)){
			for (Dict dict : getDictList(type)){
				if (type.equals(dict.getType()) && label.equals(dict.getLabel())){
					return dict.getValue();
				}
			}
		}
		return defaultLabel;
	}
	
	public static List<Dict> getDictList(String type){
		@SuppressWarnings("unchecked")
		Map<String, List<Dict>> dictMap = (Map<String, List<Dict>>)CacheUtils.get(CACHE_DICT_MAP);
		if (dictMap==null){
			dictMap = Maps.newHashMap();
			for (Dict dict : dictDao.findAllList(new Dict())){
				List<Dict> dictList = dictMap.get(dict.getType());
				if (dictList != null){
					dictList.add(dict);
				}else{
					dictMap.put(dict.getType(), Lists.newArrayList(dict));
				}
			}
			CacheUtils.put(CACHE_DICT_MAP, dictMap);
		}
		List<Dict> dictList = dictMap.get(type);
		if (dictList == null){
			dictList = Lists.newArrayList();
		}
		return dictList;
	}
	
	public static List<Dict> getOtherDictList(String type){
	    @SuppressWarnings("unchecked")
	    Map<String, List<Dict>> dictMap = (Map<String, List<Dict>>)CacheUtils.get(CACHE_OTHERDICT_MAP);
	    if (dictMap==null){
	        dictMap = Maps.newHashMap();
	        for (Dict dict : dictDao.findOtherTableList(new Dict())){
	            List<Dict> dictList = dictMap.get(dict.getType());
	            if (dictList != null){
	                dictList.add(dict);
	            }else{
	                dictMap.put(dict.getType(), Lists.newArrayList(dict));
	            }
	        }
	        CacheUtils.put(CACHE_OTHERDICT_MAP, dictMap);
	    }
	    List<Dict> dictList = dictMap.get(type);
	    if (dictList == null){
	        dictList = Lists.newArrayList();
	    }
	    return dictList;
	}
	
	/**
	 * 返回字典列表（JSON）
	 * @param type
	 * @return
	 */
	public static String getDictListJson(String type){
		return JsonMapper.toJsonString(getDictList(type));
	}
	
}