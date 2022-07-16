CREATE TABLE products (
  id SERIAL NOT NULL,
  name VARCHAR NOT NULL,
  short_desc TEXT NOT NULL,
  src VARCHAR NOT NULL,
  href VARCHAR NOT NULL,
  price DECIMAL NOT NULL,
  PRIMARY KEY (id)
);

-- Dummy data for display purposes

INSERT INTO products (name, short_desc, src, href, price) VALUES 
('React', 'Everybody loves (hates) it', '/techs/ReactLogo.svg', '/products/react', 18.1),
('Angular', 'What else do you need', '/techs/angularlogo.svg', '/products/angular', 14),
('Vue', 'The cool kid', '/techs/vuelogo.svg', '/products/vue', 26.14),
('Svelte', 'The next rockstar', '/techs/sveltelogo.svg', '/products/svelte', 34.8),
('Lit', 'You should check it out', '/techs/litlogo.svg', '/products/lit', 22.5),
('Solid', 'Doing things right', '/techs/solidlogo.svg', '/products/solid', 14.3);