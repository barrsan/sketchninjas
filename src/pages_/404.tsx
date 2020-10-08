import { NextPage } from 'next';
import { ErrorLayout } from '@/layouts';

const Error404: NextPage = () => <ErrorLayout statusCode={404} />;

export default Error404;
