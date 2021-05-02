import { useRouter } from 'next/router';

import { Header } from '../../components/header';

export default function Categories() {
  const router = useRouter();
  const { categoryId } = router.query;

  return (
    <div className="page">
      <Header isLoggedIn={false} isHost={false} />
      <h1>Categories {categoryId}</h1>
    </div>
  );
}
