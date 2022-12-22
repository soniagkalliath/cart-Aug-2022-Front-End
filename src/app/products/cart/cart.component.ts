import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any=[]
  grantTotal:any=0
  total=0
  updatedTotal:any=0

  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartItemsList.subscribe(
      (data)=>{
        console.log(data);
        this.cartItems = data
      }
    )
    let total= this.cart.getTotal()
    this.grantTotal =total.toFixed(2)
  }
//removeItem(product)
removeItem(product:any){
this.cart.removeCartItem(product)
this.total= this.cart.getTotal()
this.grantTotal =this.total.toFixed(2)
}
//removeAllItems()
removeAllItems(){
  this.cart.removeAllItems()
}

//discount3per()
discount3per(source:any){
  party.confetti(source);
  let discount = (this.grantTotal * 3)/100
  let discountValue = this.grantTotal - discount
  this.updatedTotal =discountValue.toFixed(2)
 }

//discount5per()
discount5per(source:any){
  party.confetti(source);
  let discount = (this.grantTotal * 5)/100
  let discountValue = this.grantTotal - discount
  this.updatedTotal =discountValue.toFixed(2)

}

//discount30per()
discount30per(source:any){
  party.confetti(source);
  let discount = (this.grantTotal * 30)/100
  let discountValue = this.grantTotal - discount
  this.updatedTotal =discountValue.toFixed(2)

}
//discount50per()
discount50per(source:any){
  party.confetti(source);
  let discount = (this.grantTotal * 50)/100
  let discountValue = this.grantTotal - discount
  this.updatedTotal =discountValue.toFixed(2)
}
proceed(){
  // party.confetti(source);
  this.removeAllItems()
  alert('Your order place successfully')
  this.router.navigateByUrl('')
}

}
