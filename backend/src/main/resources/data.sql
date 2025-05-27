/* ───────────────────────────────────────────────────────────────
   1 ▸ ÍNDICES ÚNICOS (no fallan si ya existen)
   ─────────────────────────────────────────────────────────────── */
-- Cada cliente se identifica por su DNI
CREATE UNIQUE INDEX IF NOT EXISTS idx_customer_dni
  ON customer (dni);

-- Una empresa se identifica por nombre + ciudad
CREATE UNIQUE INDEX IF NOT EXISTS idx_company_name_city
  ON company (name, city);


/* ───────────────────────────────────────────────────────────────
   2 ▸ INSERCIÓN IDEMPOTENTE DE CLIENTES
   ─────────────────────────────────────────────────────────────── */
INSERT INTO customer (dni, phone) VALUES
  ('12345678A', '600123456'),  -- Alicante
  ('87654321B', '600654321'),  -- Alicante
  ('11223344C', '600112233'),  -- Madrid
  ('22334455D', '600223344'),  -- Barcelona
  ('33445566E', '600334455'),  -- Valencia
  ('44556677F', '600445566')   -- Sevilla
ON CONFLICT (dni) DO NOTHING;


/* ───────────────────────────────────────────────────────────────
   3 ▸ INSERCIÓN IDEMPOTENTE DE EMPRESAS
   ─────────────────────────────────────────────────────────────── */
INSERT INTO company (name, type, phone, city) VALUES
  -- Alicante
  ('Gruas Alicante', 'TOW',  '965123456', 'Alicante'),
  ('Taxi Alicante',  'TAXI', '965654321', 'Alicante'),

  -- Madrid
  ('Gruas Madrid',   'TOW',  '914123456', 'Madrid'),
  ('Taxi Madrid',    'TAXI', '915654321', 'Madrid'),

  -- Barcelona
  ('Gruas BCN',      'TOW',  '931123456', 'Barcelona'),
  ('Taxi BCN',       'TAXI', '932654321', 'Barcelona'),

  -- Valencia
  ('Gruas VLC',      'TOW',  '961123456', 'Valencia'),
  ('Taxi VLC',       'TAXI', '962654321', 'Valencia'),

  -- Sevilla
  ('Gruas Sevilla',  'TOW',  '954123456', 'Sevilla'),
  ('Taxi Sevilla',   'TAXI', '955654321', 'Sevilla')
ON CONFLICT (name, city) DO NOTHING;
