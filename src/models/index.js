// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "RECEIVED": "RECEIVED",
  "SUCCESS": "SUCCESS",
  "FAILED": "FAILED",
  "PROCESSING": "PROCESSING",
  "DISPATCHED": "DISPATCHED"
};

const ProductWeight = {
  "SEVENTH": "SEVENTH",
  "EIGHT": "EIGHT",
  "ZIP": "ZIP",
  "HALF": "HALF"
};

const Effects = {
  "RELAXING": "RELAXING",
  "ALERT": "ALERT",
  "EUPHORIC": "EUPHORIC",
  "HAPPY": "HAPPY",
  "UPLIFTED": "UPLIFTED",
  "SLEEPY": "SLEEPY",
  "HUNGRY": "HUNGRY",
  "CREATIVE": "CREATIVE",
  "GIGGLY": "GIGGLY",
  "FOCUSED": "FOCUSED",
  "TINGLY": "TINGLY",
  "ENERGETIC": "ENERGETIC",
  "TALKATIVE": "TALKATIVE",
  "AROUSED": "AROUSED"
};

const DeliveryStatus = {
  "RECEIVED": "RECEIVED",
  "PROCESSING": "PROCESSING",
  "SUCCESS": "SUCCESS",
  "FAILED": "FAILED",
  "INTRANSIT": "INTRANSIT",
  "DELIVERED": "DELIVERED"
};

const TodoStatus = {
  "RECEIVED": "RECEIVED",
  "PROCESSING": "PROCESSING",
  "SUCCESS": "SUCCESS",
  "FAIL": "FAIL",
  "COMPLETED": "COMPLETED"
};

const MessageStatus = {
  "SENT": "SENT",
  "READ": "READ",
  "SUCCESS": "SUCCESS",
  "FAIL": "FAIL",
  "DELETED": "DELETED"
};

const ProductCategory = {
  "INDICA": "INDICA",
  "SATIVA": "SATIVA",
  "HYBRID": "HYBRID",
  "OILS": "OILS",
  "TINCTURE": "TINCTURE",
  "GEAR": "GEAR",
  "APPAREL": "APPAREL"
};

const { Task, PrivateNote, Todo, Vendor, Product, Worker, Order, ProductOrder, Cart, User, Referrals, S3Object } = initSchema(schema);

export {
  Task,
  PrivateNote,
  Todo,
  Vendor,
  Product,
  Worker,
  Order,
  ProductOrder,
  Cart,
  User,
  Referrals,
  OrderStatus,
  ProductWeight,
  Effects,
  DeliveryStatus,
  TodoStatus,
  MessageStatus,
  ProductCategory,
  S3Object
};