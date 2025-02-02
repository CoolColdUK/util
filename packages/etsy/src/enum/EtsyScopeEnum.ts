export enum EtsyScopeEnum {
  /** Read a member's shipping addresses. */
  ADDRESS_READ = 'address_r',
  /** Update and delete a member's shipping address. */
  ADDRESS_WRITE = 'address_w',

  /** Read a member's Etsy bill charges and payments. */
  BILLING_READ = 'billing_r',

  /** Read the contents of a member’s cart. */
  CART_READ = 'cart_r',
  /** Add and remove listings from a member's cart. */
  CART_WRITE = 'cart_w',

  /** Read a member's email address */
  EMAIL_READ = 'email_r',

  /** View a member's favorite listings and users.  */
  FAVORITES_READ = 'favorites_r',
  /** Add to and remove from a member's favorite listings and users. */
  FAVORITES_WRITE = 'favorites_w',

  /** View all details of a member's feedback (including purchase history.) */
  FEEDBACK_READ = 'feedback_r',

  /** Delete a member's listings. */
  LISTINGS_DELETE = 'listings_d',
  /** Read a member's inactive and expired (i.e., non-public) listings. */
  LISTINGS_READ = 'listings_r',
  /** Create and edit a member's listings. */
  LISTINGS_WRITE = 'listings_w',

  /** Read a member's private profile information. */
  PROFILE_READ = 'profile_r',
  /** Update a member's private profile information. */
  PROFILE_WRITE = 'profile_w',

  /** View a member's recommended listings. */
  RECOMMEND_READ = 'recommend_r',
  /** Remove a member's recommended listings. */
  RECOMMEND_WRITE = 'recommend_w',

  /** See a member's shop description, messages and sections, even if not (yet) public. */
  SHOPS_READ = 'shops_r',
  /** Update a member's shop description, messages and sections. */
  SHOPS_WRITE = 'shops_w',

  /** Read a member's purchase and sales data. This applies to buyers as well as sellers. */
  TRANSACTIONS_READ = 'transactions_r',
  /** Update a member's sales data. */
  TRANSACTIONS_WRITE = 'transactions_w',
}
