package com.hexaware.lms.service;
/*
 * Author: Charishma & SaiAparna
 * Date: 
 * Description: This is Borrowing Service Interface
 */
import java.util.List;

import com.hexaware.lms.dto.BorrowingDTO;
import com.hexaware.lms.entities.Borrowing;


public interface IBorrowingService {
	
	public Borrowing addBorrowing(BorrowingDTO borrowingDTO);
	public Borrowing returnBorrowing(BorrowingDTO borrowingDTO);
	public void deleteBorrowingById(Long borrowingid);
	public BorrowingDTO getBorrowingById(Long borrowingid);
	public List<Borrowing> getAllBorrowing();

}
