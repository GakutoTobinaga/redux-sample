import { Quotes } from "../components/quotes/Quotes";
import { Username } from "../components/username/Username";
export default function QuotesPage() {
  return (
    <>
      <h1>Quotes page</h1>
      <p>This page is intended to showcase RTK Query.</p>
      <Quotes />
      <Username/>
    </>
  );
}
