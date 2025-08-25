//
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
}); // => ma rog asta trebe sa fie in main.jsx sau index.jsx

function App() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;
}
