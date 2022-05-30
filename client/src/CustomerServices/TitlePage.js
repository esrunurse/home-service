function TitlePage(text) {
  return (
    <div className="h-24 bg-blue600 flex items-center justify-center">
      <div className="text-white text-[32px] font-medium">{text.children}</div>
    </div>
  )
}

export default TitlePage
