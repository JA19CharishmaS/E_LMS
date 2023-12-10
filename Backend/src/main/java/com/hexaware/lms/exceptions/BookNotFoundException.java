package com.hexaware.lms.exceptions;
/*
 * Author: Charishma 
 * Description: This is Exceptionn Class
 * Date  : 10/11/2023
 */
import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;

public class BookNotFoundException extends ResponseStatusException {

	public BookNotFoundException(HttpStatusCode status,String msg) {
		super(status,msg);

	}

}