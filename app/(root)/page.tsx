import { Button } from '@/components/ui/button';

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  await delay(2000);
  return <Button>Button</Button>;
};

export default HomePage;
