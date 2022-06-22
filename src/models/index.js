// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ProductCategory = {
  "INDICA": "INDICA",
  "SATIVA": "SATIVA",
  "HYBRID": "HYBRID",
  "OILS": "OILS",
  "TINCTURE": "TINCTURE",
  "GEAR": "GEAR",
  "APPAREL": "APPAREL"
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

const { Todo, Vendor, Product, Worker, Order, User, Referrals, ProductOrder, Cart, S3Object } = initSchema(schema);

export {
  Todo,
  Vendor,
  Product,
  Worker,
  Order,
  User,
  Referrals,
  ProductOrder,
  Cart,
  ProductCategory,
  Effects,
  OrderStatus,
  ProductWeight,
  DeliveryStatus,
  TodoStatus,
  MessageStatus,
  S3Object
};