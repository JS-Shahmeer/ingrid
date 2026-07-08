export function useToast() {
  const toast = (options) => {
    const { title, description, variant = "default" } = options;
    console.log(`[Toast] ${variant.toUpperCase()}: ${title}`, description);
  };
  
  return { toast };
}
