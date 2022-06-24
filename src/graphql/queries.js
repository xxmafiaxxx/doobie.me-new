/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
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
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrivateNotes = /* GraphQL */ `
  query SyncPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrivateNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
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
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        todo {
          nextToken
          startedAt
        }
        products {
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
      nextToken
      startedAt
    }
  }
`;
export const syncVendors = /* GraphQL */ `
  query SyncVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVendors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        todo {
          nextToken
          startedAt
        }
        products {
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
      nextToken
      startedAt
    }
  }
`;
export const getWorker = /* GraphQL */ `
  query GetWorker($id: ID!) {
    getWorker(id: $id) {
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
export const listWorkers = /* GraphQL */ `
  query ListWorkers(
    $filter: ModelWorkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkers = /* GraphQL */ `
  query SyncWorkers(
    $filter: ModelWorkerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        img
        date
        user {
          id
          Email
          memberSince
          name
          productLikes
          Tips
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
          nextToken
          startedAt
        }
        productorder {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        img
        date
        user {
          id
          Email
          memberSince
          name
          productLikes
          Tips
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
          nextToken
          startedAt
        }
        productorder {
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
      nextToken
      startedAt
    }
  }
`;
export const getProductOrder = /* GraphQL */ `
  query GetProductOrder($id: ID!) {
    getProductOrder(id: $id) {
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
export const listProductOrders = /* GraphQL */ `
  query ListProductOrders(
    $filter: ModelProductOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncProductOrders = /* GraphQL */ `
  query SyncProductOrders(
    $filter: ModelProductOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
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
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          name
          productLikes
          Tips
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
      nextToken
      startedAt
    }
  }
`;
export const syncCarts = /* GraphQL */ `
  query SyncCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          name
          productLikes
          Tips
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
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getReferrals = /* GraphQL */ `
  query GetReferrals($id: ID!) {
    getReferrals(id: $id) {
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
export const listReferrals = /* GraphQL */ `
  query ListReferrals(
    $filter: ModelReferralsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReferrals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncReferrals = /* GraphQL */ `
  query SyncReferrals(
    $filter: ModelReferralsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReferrals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
