import { ErrorLayout } from '@/layouts';

interface IProps {
  statusCode: number;
}

function Error({ statusCode }: IProps) {
  return <ErrorLayout statusCode={statusCode} />;
}

Error.getInitialProps = ({ res, err }) => {
  let statusCode = 404;

  if (res && res.statusCode && err && err.statusCode) {
    statusCode = err.statusCode;
  }

  return { statusCode };
};

export default Error;
