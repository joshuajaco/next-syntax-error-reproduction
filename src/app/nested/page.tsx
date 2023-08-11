import { getCurrentContext } from "external-package/foo";
import "./styles.css";

export default async function Page() {
  await getCurrentContext();
  return <div>ay</div>;
}
