import dotenv from 'dotenv'; dotenv.config();
export const env={port:process.env.PORT||5000,mongo:process.env.MONGODB_URI,jwt:process.env.JWT_SECRET||'development-only-change-me',client:process.env.CLIENT_URL||'http://localhost:5173',deliveryFee:Number(process.env.DELIVERY_FEE||40)};
