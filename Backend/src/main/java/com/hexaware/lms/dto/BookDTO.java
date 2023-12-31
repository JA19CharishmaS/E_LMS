package com.hexaware.lms.dto;
/*
 * Author: Charishma & SaiAparna
 * Date: 
 * Description: This is BookDTO Class
 */
import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;

public class BookDTO {
	
	private Long bookid;
	
	private int availablequantity;
	@NotBlank(message = "Book title is required")
	private String booktitle;
	@NotBlank(message = "Book author is required")
	private String bookauthor;
	@NotBlank(message = "Subject is required")
	private String subject;
	@NotBlank(message = "Isbn is required")
	private String isbn;
	@NotBlank(message = "Publisher name is required")
	private String publisher;
	@Past
	@NotBlank(message = "Publication date is required")
	private LocalDate publicationdate;
	
	public BookDTO() {
		super();
	}

	public Long getBookid() {
		return bookid;
	}

	public void setBookid(Long bookid) {
		this.bookid = bookid;
	}

	public int getAvailablequantity() {
		return availablequantity;
	}

	public void setAvailablequantity(int availablequantity) {
		this.availablequantity = availablequantity;
	}

	public String getBooktitle() {
		return booktitle;
	}

	public void setBooktitle(String booktitle) {
		this.booktitle = booktitle;
	}

	public String getBookauthor() {
		return bookauthor;
	}

	public void setBookauthor(String bookauthor) {
		this.bookauthor = bookauthor;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public LocalDate getPublicationdate() {
		return publicationdate;
	}

	public void setPublicationdate(LocalDate publicationdate) {
		this.publicationdate = publicationdate;
	}

	public BookDTO(Long bookid, int availablequantity,  String booktitle,
			String bookauthor,
		    String subject,
			 String isbn,
		 String publisher,
			 LocalDate publicationdate) {
		super();
		this.bookid = bookid;
		this.availablequantity = availablequantity;
		this.booktitle = booktitle;
		this.bookauthor = bookauthor;
		this.subject = subject;
		this.isbn = isbn;
		this.publisher = publisher;
		this.publicationdate = publicationdate;
	}

	


}
