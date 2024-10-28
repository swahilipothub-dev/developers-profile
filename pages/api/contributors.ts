import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure DATABASE_URL is set in your .env file
});

// Assign the handler function to a variable
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, githubUsername } = req.body;

    // Validate the request body
    if (!name || !githubUsername) {
      return res.status(400).json({ message: 'Name and GitHub username are required.' });
    }

    try {
      const query = 'INSERT INTO contributors (name, githubUsername) VALUES ($1, $2) RETURNING *'; // Updated column name
      const values = [name, githubUsername];
      const result = await pool.query(query, values);

      res.status(201).json(result.rows[0]); // Return the added contributor
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding contributor' });
    }
  } else if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM contributors');
      res.status(200).json(result.rows); // This should return an array of contributors
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching contributors' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

// Export the handler function
export default handler;
