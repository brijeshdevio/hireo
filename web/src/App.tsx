import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { Navbar } from "@/components";
import { Home } from "@/pages";
import "@/App.css";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;
