<%@ page language="java" contentType="text/html; charset=UTF-8"
	import="cn.com.git.udmp.common.web.ueditor.CustomActionEnter"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%

    request.setCharacterEncoding( "utf-8" );
	response.setHeader("Content-Type" , "text/html");
	
	String rootPath = application.getRealPath( "/" );
	
	out.write( new CustomActionEnter( request, rootPath ).exec() );
	
%>