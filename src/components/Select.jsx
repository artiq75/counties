import { Children, useEffect } from 'react'

export function Select({ value, children, onChange }) {
  useEffect(() => {
    const select = document.querySelector('.select')
    document.addEventListener('click', (e) => {
      if (!select.contains(e.target)) return
      select.classList.toggle('expand')
    })
  }, [])

  const handleClick = function (value) {
    onChange(value)
  }

  return (
    <div className="select">
      <div className="select__label">
        {value
          ? Children.toArray(children).find((o) => o.props.value === value)
              .props.children
          : Children.toArray(children)[0].props.children}
      </div>
      <ul className="select__options">
        {Children.toArray(children).map((option) => (
          <Option
            key={option.key}
            value={option.props.value}
            onClick={handleClick}
          >
            {option.props.children}
          </Option>
        ))}
      </ul>
    </div>
  )
}

export function Option({ value, children, onClick }) {
  const handleClick = function () {
    onClick(value)
  }
  return (
    <div className="option" onClick={handleClick}>
      {children}
    </div>
  )
}
