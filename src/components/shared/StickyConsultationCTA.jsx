export default function StickyConsultationCTA() {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">Schedule Your Free Consultation</h3>
          <p className="text-sm text-muted-foreground">Let's discuss your project</p>
        </div>
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded hover:opacity-90">
          Contact Us
        </button>
      </div>
    </div>
  );
}
