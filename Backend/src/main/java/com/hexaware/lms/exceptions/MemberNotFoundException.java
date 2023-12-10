package com.hexaware.lms.exceptions;
/*
 * Author: Charishma 
 * Description: This is Exceptionn Class
 * Date  : 10/11/2023
 */
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatusCode;

public class MemberNotFoundException extends ResponseStatusException {

	public MemberNotFoundException(HttpStatusCode status,String msg) {
		
		super(status,msg);
		
	}

}