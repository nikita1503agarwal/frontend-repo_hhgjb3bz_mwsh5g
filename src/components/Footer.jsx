import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} Bookkeepr, Inc. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="/test" className="hover:text-slate-900">System status</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
