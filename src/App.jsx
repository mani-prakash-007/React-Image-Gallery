import { ImageGallery } from "./components/ImageGallery";

function App() {
  return (
    <>
      <div className="my-20">
        <h1 className="font-bold text-4xl text-center">Image Gallery</h1>
        <div className="flex justify-center border my-10 mx-40">
          <ImageGallery />
        </div>
      </div>
    </>
  );
}

export default App;
