const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

const sql = neon(process.env.DATABASE_URL);

async function setup() {
    try {
        console.log('Creating table...');
        await sql`
      CREATE TABLE IF NOT EXISTS quotes (
        id SERIAL PRIMARY KEY,
        quote_ref VARCHAR(255) NOT NULL,
        insurer_name VARCHAR(255),
        total_premium DECIMAL(10, 2),
        plan_details JSONB,
        customer_details JSONB,
        policy_details JSONB,
        product_info JSONB,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

        console.log('Seeding data...');
        const result = await sql`
      INSERT INTO quotes (
        quote_ref,
        insurer_name,
        total_premium,
        plan_details,
        customer_details,
        policy_details,
        product_info
      ) VALUES (
        '90XXXXXXX763',
        'NSURE',
        724.50,
        ${JSON.stringify({
            premium_breakdown: {
                base_premium: 690.90,
                vat_percentage: 5,
                vat_amount: 34.50,
                total_discount: 0,
                total_premium: 724.50
            }
        })},
        ${JSON.stringify({
            name: 'JOHN DOE',
            email: 'johndoe@mail.com',
            mobile: '+501234567'
        })},
        ${JSON.stringify({
            content: 'Policy details content goes here.'
        })},
        ${JSON.stringify({
            content: 'Product information goes here.'
        })}
      )
      RETURNING *;
    `;

        console.log('Database setup complete. Inserted quote:', result);
    } catch (error) {
        console.error('Error setting up database:', error);
    }
}

setup();
