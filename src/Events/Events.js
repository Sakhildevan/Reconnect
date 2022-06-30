import React from 'react'
import './Event.css'
function Events() {
  return (
    <div className='events-main-div'>
      
      <div className='events-main-flex'>
        <div className='events-main-flex-div1'>
            <div className='event-flex-heading'>
              <div className='event-flex-heading-inner'>
                <h1>EVENTS AND CONFERENCES</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur dicta, tempora officia repellat dolores corporis unde animi. Ipsa sint inventore fuga minima repellat reprehenderit quam quos voluptatem numquam, commodi laborum!</p>
              </div>
            </div>
        </div>
        <div className='events-main-flex-div2'>
          <div className='event-flex-content-wrapper'>
            <div className='event-flex-content'>
              <div className='event-date'>
                <h1>1</h1>
                <h3>JUNE</h3>
              </div>
              <div className='event-date-description'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, repudiandae magnam tempore, molestiae unde ipsum adipisci accusantium dolorum at ea et deleniti magni reiciendis voluptate? Beatae placeat atque numquam suscipit?</p>
              </div>
            </div>
            <div className='event-flex-content'>
              <div className='event-date'>
                <h1>2</h1>
                <h3>JULY</h3>
              </div>
              <div className='event-date-description'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea exercitationem ad eligendi ab aspernatur animi fugiat. Asperiores dolores quidem cum, dolorum voluptate ipsam illum deserunt quae magni. Quasi, officia ea.</p>
              </div>
            </div>
            <div className='event-flex-content'>
              <div className='event-date'>
                <h1>3</h1>
                <h3>AUGUST</h3>
              </div>
              <div className='event-date-description'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque velit neque excepturi dolores, assumenda rerum maxime facilis illum, minima quis molestiae at, quaerat consectetur. Corrupti delectus quisquam modi reiciendis?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events