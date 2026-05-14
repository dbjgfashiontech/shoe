import mongoose, { Schema, Document } from "mongoose";

export interface IOrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface IOrder extends Document {
  orderId: string;
  userId: mongoose.Types.ObjectId;  // ✅ NEW
  customerName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  items: IOrderItem[];
  subtotal: number;
  shipping: number;
  grandTotal: number;
  status: "Order Placed" | "Order Packed" | "Out for Delivery" | "Delivered";
  deliveryDate: Date;
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    orderId:      { type: String, required: true, unique: true },
    userId:       { type: Schema.Types.ObjectId, ref: "User", required: true }, // ✅ NEW
    customerName: { type: String, required: true },
    phone:        { type: String, required: true },
    address:      { type: String, required: true },
    city:         { type: String, required: true },
    state:        { type: String, required: true },
    pincode:      { type: String, required: true },
    items: [
      {
        id:       String,
        name:     String,
        price:    Number,
        quantity: Number,
        image:    String,
        category: String,
      },
    ],
    subtotal:     { type: Number, required: true },
    shipping:     { type: Number, required: true },
    grandTotal:   { type: Number, required: true },
    status: {
      type: String,
      enum: ["Order Placed", "Order Packed", "Out for Delivery", "Delivered"],
      default: "Order Placed",
    },
    deliveryDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);