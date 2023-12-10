import { Book } from "./Book";
import { Member } from "./member";


export class Borrow{
    borrowingid:number=0;
    duedate:Date=new Date();
    returndate:Date=new Date();
    book!:Book;
    member!:Member;
}