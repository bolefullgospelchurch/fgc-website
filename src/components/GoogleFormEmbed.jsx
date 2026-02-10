function GoogleFormEmbed({ src, height = 1200 }) {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <iframe
        src={src}
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default GoogleFormEmbed;
