import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

// Mock database
const resumes: Record<string, any> = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, experience, skills } = req.body;
        const id = uuidv4();
        
        resumes[id] = { name, email, experience, skills };
        
        res.status(200).json({ url: `/api/resume/${id}` });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
