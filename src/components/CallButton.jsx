import { getCallLink, BUSINESS } from '../config/business'

export default function CallButton({ children, className = '', ...props }) {
  return (
    <a
      href={getCallLink()}
      className={`btn btn-call ${className}`}
      {...props}
    >
      📞 {children || 'Call Now'}
    </a>
  )
}
