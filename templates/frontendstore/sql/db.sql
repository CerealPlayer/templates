CREATE TABLE product_categories (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  descr TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE TABLE products (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  short_desc TEXT NOT NULL,
  sku VARCHAR,
  category_id INT NOT NULL,
  qt DECIMAL NOT NULL,
  price DECIMAL NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  CONSTRAINT fk_cate FOREIGN KEY(category_id) REFERENCES product_categories(id)
);

CREATE TABLE product_media (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_id INT NOT NULL,
  media_type VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  deleted_at TIMESTAMP,
  CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES products(id)
);

CREATE TABLE discounts (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  product_id INT,
  category_id INT,
  descr TEXT NOT NULL,
  discount_percent DECIMAL,
  discount_absolute DECIMAL,
  active BOOLEAN NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  deleted_at TIMESTAMP,
  CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES products(id),
  CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES product_categories(id)
);

CREATE TABLE users (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR NOT NULL,
  pass VARCHAR NOT NULL,
  full_name TEXT NOT NULL,
  phone INT NOT NULL,
  phone_prefix INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP
);

CREATE TABLE user_addresses (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT NOT NULL,
  line_1 TEXT NOT NULL,
  line_2 TEXT,
  postal_code VARCHAR,
  country VARCHAR,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE user_payments (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT NOT NULL,
  stripe_id VARCHAR NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE orders (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  qt DECIMAL NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  CONSTRAINT fk_order FOREIGN KEY(order_id) REFERENCES orders(id),
  CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES products(id)
);

CREATE TABLE payment_details (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  order_id INT NOT NULL,
  amount DECIMAL NOT NULL,
  stripe_pi VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP,
  CONSTRAINT fk_order FOREIGN KEY(order_id) REFERENCES orders(id)
);
