import React, { useRef, useState } from 'react'
import styles from './Search.module.scss'
export function Search(props) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        props.handleSearh(query);
    };

    return (
        <div className={styles.Search}>
            <input
                type="text"
                placeholder='поиск задач...'
                onChange={handleSearchChange}
                value={searchQuery}
            />
        </div>
    )
}
