package com.hexaware.lms.restcontroller;
/*
 * Author: Charishma & SaiAparna
 * Date: 
 * Description: This is Boook Rest Controller
 */


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.lms.dto.BookDTO;
import com.hexaware.lms.entities.Book;
import com.hexaware.lms.exceptions.BookNotFoundException;
import com.hexaware.lms.service.IBookService;

import jakarta.validation.Valid;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/librarymanagementsystem/book")
public class BookRestController {
	
	
	private IBookService service;
	@Autowired
	public BookRestController(IBookService service) {
		super();
		this.service = service;
	}


	@PostMapping("/add")
	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
	public Book addBook(@RequestBody BookDTO bookDTO) {

		return service.addBook(bookDTO);
	}
	
	@PutMapping(value ="/update/{bookid}", consumes = "application/json", produces = "application/json")
	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
	public Book updateBook(@RequestBody BookDTO bookDTO,@PathVariable Long bookid) {

		return service.updateBook(bookDTO,bookid);

	}
	
	@DeleteMapping("/delete/{bookid}")
	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
	public String deleteById(@PathVariable Long bookid) {

		service.deleteBookById(bookid); // returns void

		return "Record Deleted";
	}
	
	@GetMapping("/getbybooktitle/{booktitle}")
	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN','ROLE_USER')")
	public List <Book> getBookByTitle(@PathVariable @Valid String booktitle) throws BookNotFoundException{
		
		List <Book>  books = service.getBookByTitle(booktitle);
		
		if (books.isEmpty()) {
	        throw new BookNotFoundException(HttpStatus.BAD_REQUEST, "No books found for title: " + booktitle);
	    }
		
		return books;
		
	}
	
	@GetMapping("/getbybookauthor/{bookauthor}")
	
	
	
	@PreAuthorize("hasAnyAuthority('ROLE_USER')")
	public Book  getBookByAuthor(@PathVariable @Valid String bookauthor) throws BookNotFoundException{
		
		Book book = service.getBookByAuthor(bookauthor);

        if(book.getBookauthor() == null) {
			
			throw new BookNotFoundException(HttpStatus.BAD_REQUEST,"Book Not Found for author : "+bookauthor);
		}
		
		return book;
		
	}

	@GetMapping("/getbysubject/{subject}")
	@PreAuthorize("hasAnyAuthority('ROLE_USER')")
	public Book  getBookBySubject(@PathVariable  @Valid String subject) throws BookNotFoundException{
		
		Book book = service.getBookBySubject(subject);

        if(book.getSubject() == null) {
			
			throw new BookNotFoundException(HttpStatus.BAD_REQUEST,"Book Not Found for sbject : "+subject);
		}
		
		return book;
		
	}
	@GetMapping("/findbooks")
	@PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN')")
	public List<BookDTO> getAll() 
	{
		System.out.println("Find all the Books");
		return service.getAll();
	}
}
