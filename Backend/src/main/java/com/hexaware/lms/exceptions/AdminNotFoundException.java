package com.hexaware.lms.exceptions;
/*
 * Author: Charishma 
 * Description: This is Exceptionn Class
 * Date  : 10/11/2023
 */
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class AdminNotFoundException extends ResponseStatusException {

	public AdminNotFoundException(HttpStatus status,String msg) {
		super(status,msg); }

}
