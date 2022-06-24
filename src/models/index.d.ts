import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ProductCategory {
  INDICA = "INDICA",
  SATIVA = "SATIVA",
  HYBRID = "HYBRID",
  OILS = "OILS",
  TINCTURE = "TINCTURE",
  GEAR = "GEAR",
  APPAREL = "APPAREL"
}

export enum Effects {
  RELAXING = "RELAXING",
  ALERT = "ALERT",
  EUPHORIC = "EUPHORIC",
  HAPPY = "HAPPY",
  UPLIFTED = "UPLIFTED",
  SLEEPY = "SLEEPY",
  HUNGRY = "HUNGRY",
  CREATIVE = "CREATIVE",
  GIGGLY = "GIGGLY",
  FOCUSED = "FOCUSED",
  TINGLY = "TINGLY",
  ENERGETIC = "ENERGETIC",
  TALKATIVE = "TALKATIVE",
  AROUSED = "AROUSED"
}

export enum OrderStatus {
  RECEIVED = "RECEIVED",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  PROCESSING = "PROCESSING",
  DISPATCHED = "DISPATCHED"
}

export enum ProductWeight {
  SEVENTH = "SEVENTH",
  EIGHT = "EIGHT",
  ZIP = "ZIP",
  HALF = "HALF"
}

export enum DeliveryStatus {
  RECEIVED = "RECEIVED",
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  INTRANSIT = "INTRANSIT",
  DELIVERED = "DELIVERED"
}

export enum TodoStatus {
  RECEIVED = "RECEIVED",
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  COMPLETED = "COMPLETED"
}

export enum MessageStatus {
  SENT = "SENT",
  READ = "READ",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  DELETED = "DELETED"
}

export declare class S3Object {
  readonly bucket: string;
  readonly key: string;
  readonly region: string;
  constructor(init: ModelInit<S3Object>);
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PrivateNoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VendorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'updatedAt';
}

type WorkerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReferralsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Task {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}

export declare class PrivateNote {
  readonly id: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PrivateNote, PrivateNoteMetaData>);
  static copyOf(source: PrivateNote, mutator: (draft: MutableModel<PrivateNote, PrivateNoteMetaData>) => MutableModel<PrivateNote, PrivateNoteMetaData> | void): PrivateNote;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly email?: string | null;
  readonly priority?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vendorTodoId?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Vendor {
  readonly id: string;
  readonly name?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly address?: string | null;
  readonly address2?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly walletAddress?: string | null;
  readonly ETHAddress?: string | null;
  readonly SHIBAddress?: string | null;
  readonly BTCAddress?: string | null;
  readonly licenced?: boolean | null;
  readonly description?: string | null;
  readonly filePath?: string | null;
  readonly likes?: number | null;
  readonly licenceNumber?: number | null;
  readonly licensePending?: boolean | null;
  readonly linenseType?: number | null;
  readonly licenseNumber?: number | null;
  readonly TIN?: number | null;
  readonly phoneNumber?: string | null;
  readonly storeAddress?: string | null;
  readonly storeState?: string | null;
  readonly storeInsured?: string | null;
  readonly mobileSeller?: boolean | null;
  readonly upvotes?: number | null;
  readonly downvotes?: number | null;
  readonly planSelected?: string | null;
  readonly feedback?: string | null;
  readonly doobieCode?: number | null;
  readonly todo?: (Todo | null)[] | null;
  readonly products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderFilledById?: string | null;
  constructor(init: ModelInit<Vendor, VendorMetaData>);
  static copyOf(source: Vendor, mutator: (draft: MutableModel<Vendor, VendorMetaData>) => MutableModel<Vendor, VendorMetaData> | void): Vendor;
}

export declare class Product {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly title: string;
  readonly Available?: boolean | null;
  readonly category?: ProductCategory | keyof typeof ProductCategory | null;
  readonly currentInventory: number;
  readonly image_url?: string | null;
  readonly Featured?: boolean | null;
  readonly rating?: number | null;
  readonly price: number;
  readonly upvotes?: number | null;
  readonly downvotes?: number | null;
  readonly shortDescription?: string | null;
  readonly description?: string | null;
  readonly effects?: Effects | keyof typeof Effects | null;
  readonly likes?: number | null;
  readonly Turpines?: string | null;
  readonly THC?: number | null;
  readonly CBD?: number | null;
  readonly AmtSold?: number | null;
  readonly updatedAt?: string | null;
  readonly vendorProductsId?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Worker {
  readonly id: string;
  readonly accountActive?: boolean | null;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly dob?: string | null;
  readonly ssn?: string | null;
  readonly address?: string | null;
  readonly paymentMethod?: string | null;
  readonly teams?: string | null;
  readonly email?: string | null;
  readonly walking?: boolean | null;
  readonly capacity?: number | null;
  readonly displayName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Worker, WorkerMetaData>);
  static copyOf(source: Worker, mutator: (draft: MutableModel<Worker, WorkerMetaData>) => MutableModel<Worker, WorkerMetaData> | void): Worker;
}

export declare class Order {
  readonly id: string;
  readonly name?: string | null;
  readonly img?: string | null;
  readonly date?: string | null;
  readonly Status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly quantity?: number | null;
  readonly OrderTotal?: number | null;
  readonly FilledBy?: (Vendor | null)[] | null;
  readonly productorder?: (ProductOrder | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userOrdersId?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class User {
  readonly id: string;
  readonly Email?: string | null;
  readonly memberSince?: string | null;
  readonly Orders?: (Order | null)[] | null;
  readonly shoppingCart?: (Cart | null)[] | null;
  readonly name?: string | null;
  readonly productLikes?: number | null;
  readonly Tips?: string | null;
  readonly referredBy?: Referrals | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReferredById?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Cart {
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly price?: number | null;
  readonly amount?: number | null;
  readonly cartTotal?: number | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class Referrals {
  readonly id: string;
  readonly Email?: string | null;
  readonly ReferredBy?: string | null;
  readonly Amt?: number | null;
  readonly date?: string | null;
  readonly award?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Referrals, ReferralsMetaData>);
  static copyOf(source: Referrals, mutator: (draft: MutableModel<Referrals, ReferralsMetaData>) => MutableModel<Referrals, ReferralsMetaData> | void): Referrals;
}

export declare class ProductOrder {
  readonly id: string;
  readonly weight?: string | null;
  readonly date?: string | null;
  readonly quantity?: number | null;
  readonly Status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderProductorderId?: string | null;
  constructor(init: ModelInit<ProductOrder, ProductOrderMetaData>);
  static copyOf(source: ProductOrder, mutator: (draft: MutableModel<ProductOrder, ProductOrderMetaData>) => MutableModel<ProductOrder, ProductOrderMetaData> | void): ProductOrder;
}