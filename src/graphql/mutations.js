/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      email
      priority
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vendorTodoId
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      email
      priority
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vendorTodoId
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      email
      priority
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vendorTodoId
    }
  }
`;
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
      id
      name
      username
      email
      address
      address2
      state
      zip
      walletAddress
      ETHAddress
      SHIBAddress
      BTCAddress
      licenced
      description
      filePath
      likes
      licenceNumber
      licensePending
      linenseType
      licenseNumber
      TIN
      phoneNumber
      storeAddress
      storeState
      storeInsured
      mobileSeller
      upvotes
      downvotes
      planSelected
      feedback
      doobieCode
      todo {
        items {
          id
          name
          description
          email
          priority
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vendorTodoId
        }
        nextToken
        startedAt
      }
      products {
        items {
          id
          createdAt
          title
          Available
          category
          currentInventory
          image_url
          Featured
          rating
          price
          upvotes
          downvotes
          shortDescription
          description
          effects
          likes
          Turpines
          THC
          CBD
          AmtSold
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vendorProductsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderFilledById
      owner
    }
  }
`;
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
      id
      name
      username
      email
      address
      address2
      state
      zip
      walletAddress
      ETHAddress
      SHIBAddress
      BTCAddress
      licenced
      description
      filePath
      likes
      licenceNumber
      licensePending
      linenseType
      licenseNumber
      TIN
      phoneNumber
      storeAddress
      storeState
      storeInsured
      mobileSeller
      upvotes
      downvotes
      planSelected
      feedback
      doobieCode
      todo {
        items {
          id
          name
          description
          email
          priority
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vendorTodoId
        }
        nextToken
        startedAt
      }
      products {
        items {
          id
          createdAt
          title
          Available
          category
          currentInventory
          image_url
          Featured
          rating
          price
          upvotes
          downvotes
          shortDescription
          description
          effects
          likes
          Turpines
          THC
          CBD
          AmtSold
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vendorProductsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderFilledById
      owner
    }
  }
`;
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
      id
      name
      username
      email
      address
      address2
      state
      zip
      walletAddress
      ETHAddress
      SHIBAddress
      BTCAddress
      licenced
      description
      filePath
      likes
      licenceNumber
      licensePending
      linenseType
      licenseNumber
      TIN
      phoneNumber
      storeAddress
      storeState
      storeInsured
      mobileSeller
      upvotes
      downvotes
      planSelected
      feedback
      doobieCode
      todo {
        items {
          id
          name
          description
          email
          priority
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vendorTodoId
        }
        nextToken
        startedAt
      }
      products {
        items {
          id
          createdAt
          title
          Available
          category
          currentInventory
          image_url
          Featured
          rating
          price
          upvotes
          downvotes
          shortDescription
          description
          effects
          likes
          Turpines
          THC
          CBD
          AmtSold
          updatedAt
          _version
          _deleted
          _lastChangedAt
          vendorProductsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderFilledById
      owner
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      createdAt
      title
      Available
      category
      currentInventory
      image_url
      Featured
      rating
      price
      upvotes
      downvotes
      shortDescription
      description
      effects
      likes
      Turpines
      THC
      CBD
      AmtSold
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vendorProductsId
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      createdAt
      title
      Available
      category
      currentInventory
      image_url
      Featured
      rating
      price
      upvotes
      downvotes
      shortDescription
      description
      effects
      likes
      Turpines
      THC
      CBD
      AmtSold
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vendorProductsId
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      createdAt
      title
      Available
      category
      currentInventory
      image_url
      Featured
      rating
      price
      upvotes
      downvotes
      shortDescription
      description
      effects
      likes
      Turpines
      THC
      CBD
      AmtSold
      updatedAt
      _version
      _deleted
      _lastChangedAt
      vendorProductsId
    }
  }
`;
export const createWorker = /* GraphQL */ `
  mutation CreateWorker(
    $input: CreateWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    createWorker(input: $input, condition: $condition) {
      id
      accountActive
      name
      phone
      dob
      ssn
      address
      paymentMethod
      teams
      email
      walking
      capacity
      displayName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateWorker = /* GraphQL */ `
  mutation UpdateWorker(
    $input: UpdateWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    updateWorker(input: $input, condition: $condition) {
      id
      accountActive
      name
      phone
      dob
      ssn
      address
      paymentMethod
      teams
      email
      walking
      capacity
      displayName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteWorker = /* GraphQL */ `
  mutation DeleteWorker(
    $input: DeleteWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    deleteWorker(input: $input, condition: $condition) {
      id
      accountActive
      name
      phone
      dob
      ssn
      address
      paymentMethod
      teams
      email
      walking
      capacity
      displayName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      name
      img
      date
      user {
        id
        Email
        memberSince
        Orders {
          nextToken
          startedAt
        }
        shoppingCart {
          nextToken
          startedAt
        }
        name
        productLikes
        Tips
        referredBy {
          id
          Email
          ReferredBy
          Amt
          date
          award
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userReferredById
        owner
      }
      Status
      quantity
      OrderTotal
      FilledBy {
        items {
          id
          name
          username
          email
          address
          address2
          state
          zip
          walletAddress
          ETHAddress
          SHIBAddress
          BTCAddress
          licenced
          description
          filePath
          likes
          licenceNumber
          licensePending
          linenseType
          licenseNumber
          TIN
          phoneNumber
          storeAddress
          storeState
          storeInsured
          mobileSeller
          upvotes
          downvotes
          planSelected
          feedback
          doobieCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderFilledById
          owner
        }
        nextToken
        startedAt
      }
      productorder {
        items {
          id
          weight
          date
          quantity
          Status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderProductorderId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userOrdersId
      owner
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      name
      img
      date
      user {
        id
        Email
        memberSince
        Orders {
          nextToken
          startedAt
        }
        shoppingCart {
          nextToken
          startedAt
        }
        name
        productLikes
        Tips
        referredBy {
          id
          Email
          ReferredBy
          Amt
          date
          award
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userReferredById
        owner
      }
      Status
      quantity
      OrderTotal
      FilledBy {
        items {
          id
          name
          username
          email
          address
          address2
          state
          zip
          walletAddress
          ETHAddress
          SHIBAddress
          BTCAddress
          licenced
          description
          filePath
          likes
          licenceNumber
          licensePending
          linenseType
          licenseNumber
          TIN
          phoneNumber
          storeAddress
          storeState
          storeInsured
          mobileSeller
          upvotes
          downvotes
          planSelected
          feedback
          doobieCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderFilledById
          owner
        }
        nextToken
        startedAt
      }
      productorder {
        items {
          id
          weight
          date
          quantity
          Status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderProductorderId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userOrdersId
      owner
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      name
      img
      date
      user {
        id
        Email
        memberSince
        Orders {
          nextToken
          startedAt
        }
        shoppingCart {
          nextToken
          startedAt
        }
        name
        productLikes
        Tips
        referredBy {
          id
          Email
          ReferredBy
          Amt
          date
          award
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userReferredById
        owner
      }
      Status
      quantity
      OrderTotal
      FilledBy {
        items {
          id
          name
          username
          email
          address
          address2
          state
          zip
          walletAddress
          ETHAddress
          SHIBAddress
          BTCAddress
          licenced
          description
          filePath
          likes
          licenceNumber
          licensePending
          linenseType
          licenseNumber
          TIN
          phoneNumber
          storeAddress
          storeState
          storeInsured
          mobileSeller
          upvotes
          downvotes
          planSelected
          feedback
          doobieCode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderFilledById
          owner
        }
        nextToken
        startedAt
      }
      productorder {
        items {
          id
          weight
          date
          quantity
          Status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderProductorderId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userOrdersId
      owner
    }
  }
`;
export const createProductOrder = /* GraphQL */ `
  mutation CreateProductOrder(
    $input: CreateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    createProductOrder(input: $input, condition: $condition) {
      id
      weight
      date
      quantity
      Status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderProductorderId
      owner
    }
  }
`;
export const updateProductOrder = /* GraphQL */ `
  mutation UpdateProductOrder(
    $input: UpdateProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    updateProductOrder(input: $input, condition: $condition) {
      id
      weight
      date
      quantity
      Status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderProductorderId
      owner
    }
  }
`;
export const deleteProductOrder = /* GraphQL */ `
  mutation DeleteProductOrder(
    $input: DeleteProductOrderInput!
    $condition: ModelProductOrderConditionInput
  ) {
    deleteProductOrder(input: $input, condition: $condition) {
      id
      weight
      date
      quantity
      Status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderProductorderId
      owner
    }
  }
`;
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
      id
      title
      image
      price
      amount
      cartTotal
      User {
        id
        Email
        memberSince
        Orders {
          nextToken
          startedAt
        }
        shoppingCart {
          nextToken
          startedAt
        }
        name
        productLikes
        Tips
        referredBy {
          id
          Email
          ReferredBy
          Amt
          date
          award
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userReferredById
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userShoppingCartId
      owner
    }
  }
`;
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
      id
      title
      image
      price
      amount
      cartTotal
      User {
        id
        Email
        memberSince
        Orders {
          nextToken
          startedAt
        }
        shoppingCart {
          nextToken
          startedAt
        }
        name
        productLikes
        Tips
        referredBy {
          id
          Email
          ReferredBy
          Amt
          date
          award
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userReferredById
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userShoppingCartId
      owner
    }
  }
`;
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
      id
      title
      image
      price
      amount
      cartTotal
      User {
        id
        Email
        memberSince
        Orders {
          nextToken
          startedAt
        }
        shoppingCart {
          nextToken
          startedAt
        }
        name
        productLikes
        Tips
        referredBy {
          id
          Email
          ReferredBy
          Amt
          date
          award
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userReferredById
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userShoppingCartId
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      Email
      memberSince
      Orders {
        items {
          id
          name
          img
          date
          Status
          quantity
          OrderTotal
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userOrdersId
          owner
        }
        nextToken
        startedAt
      }
      shoppingCart {
        items {
          id
          title
          image
          price
          amount
          cartTotal
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userShoppingCartId
          owner
        }
        nextToken
        startedAt
      }
      name
      productLikes
      Tips
      referredBy {
        id
        Email
        ReferredBy
        Amt
        date
        award
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userReferredById
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      Email
      memberSince
      Orders {
        items {
          id
          name
          img
          date
          Status
          quantity
          OrderTotal
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userOrdersId
          owner
        }
        nextToken
        startedAt
      }
      shoppingCart {
        items {
          id
          title
          image
          price
          amount
          cartTotal
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userShoppingCartId
          owner
        }
        nextToken
        startedAt
      }
      name
      productLikes
      Tips
      referredBy {
        id
        Email
        ReferredBy
        Amt
        date
        award
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userReferredById
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      Email
      memberSince
      Orders {
        items {
          id
          name
          img
          date
          Status
          quantity
          OrderTotal
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userOrdersId
          owner
        }
        nextToken
        startedAt
      }
      shoppingCart {
        items {
          id
          title
          image
          price
          amount
          cartTotal
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userShoppingCartId
          owner
        }
        nextToken
        startedAt
      }
      name
      productLikes
      Tips
      referredBy {
        id
        Email
        ReferredBy
        Amt
        date
        award
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userReferredById
      owner
    }
  }
`;
export const createReferrals = /* GraphQL */ `
  mutation CreateReferrals(
    $input: CreateReferralsInput!
    $condition: ModelReferralsConditionInput
  ) {
    createReferrals(input: $input, condition: $condition) {
      id
      Email
      ReferredBy
      Amt
      date
      award
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateReferrals = /* GraphQL */ `
  mutation UpdateReferrals(
    $input: UpdateReferralsInput!
    $condition: ModelReferralsConditionInput
  ) {
    updateReferrals(input: $input, condition: $condition) {
      id
      Email
      ReferredBy
      Amt
      date
      award
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteReferrals = /* GraphQL */ `
  mutation DeleteReferrals(
    $input: DeleteReferralsInput!
    $condition: ModelReferralsConditionInput
  ) {
    deleteReferrals(input: $input, condition: $condition) {
      id
      Email
      ReferredBy
      Amt
      date
      award
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
