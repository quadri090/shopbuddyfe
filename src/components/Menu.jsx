import React from 'react'

function MenuCard( props ) {
    const [showline, setShowLine] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <div className='hover:text-orange-500 h-8' onMouseOver={() => setShowmenu()}>
            <p className='text-zinc-700 font-semibold hover:text-orange-500 hover:cursor-pointer' onMouseOver={() => setShowLine(true)} onMouseOut={() => setShowLine(false)}>{props.header.toUpperCase()}</p>
            {showline && ( 
                <div className='border-b-[3px] mt-2 border-orange-500'></div>
            )}
        </div>
    )
}

export default function Menu() {
  return (
    <div className='flex items-center justify-center gap-10'>
        <MenuCard
            header="home"
        
        />
         <MenuCard
            header="categories"
        
        />
         <MenuCard
            header="men's"
        
        />
         <MenuCard
            header="women's"
        
        />
         <MenuCard
            header="jewelrey"
        
        />
         <MenuCard
            header="perfume"
        
        />
         <MenuCard
            header="blogs"
        
        />
         <MenuCard
            header="hot offers"
        
        />
    </div>
  )
}
