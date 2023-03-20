// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (res) => {
  'Error'.error(); // This is an accident, what can you do
  res.status(200).json({ test: 'hi' });
};
