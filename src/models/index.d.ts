import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

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

export enum ProductCategory {
  INDICA = "INDICA",
  SATIVA = "SATIVA",
  HYBRID = "HYBRID",
  OILS = "OILS",
  TINCTURE = "TINCTURE",
  GEAR = "GEAR",
  APPAREL = "APPAREL"
}

type EagerS3Object = {
  readonly bucket: string;
  readonly key: string;
  readonly region: string;
}

type LazyS3Object = {
  readonly bucket: string;
  readonly key: string;
  readonly region: string;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object)

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerPrivateNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivateNote, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrivateNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrivateNote, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PrivateNote = LazyLoading extends LazyLoadingDisabled ? EagerPrivateNote : LazyPrivateNote

export declare const PrivateNote: (new (init: ModelInit<PrivateNote>) => PrivateNote) & {
  copyOf(source: PrivateNote, mutator: (draft: MutableModel<PrivateNote>) => MutableModel<PrivateNote> | void): PrivateNote;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly email?: string | null;
  readonly priority?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vendorTodoId?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly email?: string | null;
  readonly priority?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vendorTodoId?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
}

type LazyVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
  readonly todo: AsyncCollection<Todo>;
  readonly products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderFilledById?: string | null;
}

export declare type Vendor = LazyLoading extends LazyLoadingDisabled ? EagerVendor : LazyVendor

export declare const Vendor: (new (init: ModelInit<Vendor>) => Vendor) & {
  copyOf(source: Vendor, mutator: (draft: MutableModel<Vendor>) => MutableModel<Vendor> | void): Vendor;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'updatedAt';
  };
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
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'updatedAt';
  };
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
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerWorker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Worker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
}

type LazyWorker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Worker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
}

export declare type Worker = LazyLoading extends LazyLoadingDisabled ? EagerWorker : LazyWorker

export declare const Worker: (new (init: ModelInit<Worker>) => Worker) & {
  copyOf(source: Worker, mutator: (draft: MutableModel<Worker>) => MutableModel<Worker> | void): Worker;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
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
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly img?: string | null;
  readonly date?: string | null;
  readonly Status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly quantity?: number | null;
  readonly OrderTotal?: number | null;
  readonly FilledBy: AsyncCollection<Vendor>;
  readonly productorder: AsyncCollection<ProductOrder>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userOrdersId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerProductOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weight?: string | null;
  readonly date?: string | null;
  readonly quantity?: number | null;
  readonly Status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderProductorderId?: string | null;
}

type LazyProductOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weight?: string | null;
  readonly date?: string | null;
  readonly quantity?: number | null;
  readonly Status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderProductorderId?: string | null;
}

export declare type ProductOrder = LazyLoading extends LazyLoadingDisabled ? EagerProductOrder : LazyProductOrder

export declare const ProductOrder: (new (init: ModelInit<ProductOrder>) => ProductOrder) & {
  copyOf(source: ProductOrder, mutator: (draft: MutableModel<ProductOrder>) => MutableModel<ProductOrder> | void): ProductOrder;
}

type EagerCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly price?: number | null;
  readonly amount?: number | null;
  readonly cartTotal?: number | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userShoppingCartId?: string | null;
}

type LazyCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly price?: number | null;
  readonly amount?: number | null;
  readonly cartTotal?: number | null;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userShoppingCartId?: string | null;
}

export declare type Cart = LazyLoading extends LazyLoadingDisabled ? EagerCart : LazyCart

export declare const Cart: (new (init: ModelInit<Cart>) => Cart) & {
  copyOf(source: Cart, mutator: (draft: MutableModel<Cart>) => MutableModel<Cart> | void): Cart;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email?: string | null;
  readonly memberSince?: string | null;
  readonly Orders?: (Order | null)[] | null;
  readonly shoppingCart?: (Cart | null)[] | null;
  readonly name?: string | null;
  readonly productLikes?: number | null;
  readonly Tips?: number | null;
  readonly referredBy?: Referrals | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReferredById?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email?: string | null;
  readonly memberSince?: string | null;
  readonly Orders: AsyncCollection<Order>;
  readonly shoppingCart: AsyncCollection<Cart>;
  readonly name?: string | null;
  readonly productLikes?: number | null;
  readonly Tips?: number | null;
  readonly referredBy: AsyncItem<Referrals | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReferredById?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerReferrals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Referrals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email?: string | null;
  readonly ReferredBy?: string | null;
  readonly Amt?: number | null;
  readonly date?: string | null;
  readonly award?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReferrals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Referrals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Email?: string | null;
  readonly ReferredBy?: string | null;
  readonly Amt?: number | null;
  readonly date?: string | null;
  readonly award?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Referrals = LazyLoading extends LazyLoadingDisabled ? EagerReferrals : LazyReferrals

export declare const Referrals: (new (init: ModelInit<Referrals>) => Referrals) & {
  copyOf(source: Referrals, mutator: (draft: MutableModel<Referrals>) => MutableModel<Referrals> | void): Referrals;
}