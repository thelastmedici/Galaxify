// import mongoose from 'mongoose';

declare global {
  let mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;  // mongoose property can be undefined when first accessing global
}

export {};