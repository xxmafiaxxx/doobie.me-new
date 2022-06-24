/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String) {
    onCreatePrivateNote(owner: $owner) {
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
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String) {
    onUpdatePrivateNote(owner: $owner) {
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
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String) {
    onDeletePrivateNote(owner: $owner) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor($owner: String) {
    onCreateVendor(owner: $owner) {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor($owner: String) {
    onUpdateVendor(owner: $owner) {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor($owner: String) {
    onDeleteVendor(owner: $owner) {
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
export const onCreateWorker = /* GraphQL */ `
  subscription OnCreateWorker($owner: String) {
    onCreateWorker(owner: $owner) {
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
export const onUpdateWorker = /* GraphQL */ `
  subscription OnUpdateWorker($owner: String) {
    onUpdateWorker(owner: $owner) {
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
export const onDeleteWorker = /* GraphQL */ `
  subscription OnDeleteWorker($owner: String) {
    onDeleteWorker(owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
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
export const onCreateProductOrder = /* GraphQL */ `
  subscription OnCreateProductOrder($owner: String) {
    onCreateProductOrder(owner: $owner) {
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
export const onUpdateProductOrder = /* GraphQL */ `
  subscription OnUpdateProductOrder($owner: String) {
    onUpdateProductOrder(owner: $owner) {
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
export const onDeleteProductOrder = /* GraphQL */ `
  subscription OnDeleteProductOrder($owner: String) {
    onDeleteProductOrder(owner: $owner) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($owner: String) {
    onCreateCart(owner: $owner) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($owner: String) {
    onUpdateCart(owner: $owner) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($owner: String) {
    onDeleteCart(owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateReferrals = /* GraphQL */ `
  subscription OnCreateReferrals($owner: String) {
    onCreateReferrals(owner: $owner) {
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
export const onUpdateReferrals = /* GraphQL */ `
  subscription OnUpdateReferrals($owner: String) {
    onUpdateReferrals(owner: $owner) {
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
export const onDeleteReferrals = /* GraphQL */ `
  subscription OnDeleteReferrals($owner: String) {
    onDeleteReferrals(owner: $owner) {
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
