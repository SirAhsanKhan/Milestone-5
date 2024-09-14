import { NextApiRequest, NextApiResponse } from 'next';

// Mock database
const resumes: Record<string, any> = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (resumes[id as string]) {
        res.status(200).json(resumes[id as string]);
    } else {
        res.status(404).json({ message: 'Resume not found' });
    }
}
