const IGoogleWebCache = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line quotes
        __html: `if (window.location.origin.includes('https://webcache.googleusercontent.com')) { window.OhistoryReplaceState = window.history['replaceState']; window.history['replaceState'] = (...args)=> { try { return window.OhistoryReplaceState.apply(window.history, args) } catch (e) { console.log(e) } }; window.OhistoryPushState = window.history['pushState']; window.history['pushState'] = (...args)=> { try { return window.OhistoryPushState.apply(window.history, args) } catch (e) { console.log(e) } }; }`
      }}
    />
  )
}

export default IGoogleWebCache
