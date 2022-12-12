import NormalButton from "./components/NormalButton";
import TextInput from "./components/TextInput";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>

      <NormalButton buttonName="Click me" />

      <TextInput label="Enter name" />
    </div>
  );
}
