/*
 * Created Date: 19-10-2023, 9:16:36 pm
 * Author: Trương Phạm
 * Email: you@you.you
 * -----
 * Last Modified: Mon Oct 23 2023
 * Modified By: Trương Phạm
 * -----
 * Copyright (c) 2023 PT CORP, Inc
 * -----
 * HISTORY:
 * Date         By  Comments
 * ----------   --- ----------------------------------------------------------
 */

import React from 'react'
import CountUp from 'react-countup'
// import PropTypes from 'prop-types'

const QuizPercentRunner = ({start, end ,suffix, className}:any)  => {
    return (
        <div className="flex items-center gap-1">
            <CountUp
                duration={2}
                className={className}
                end={end}
                enableScrollSpy={true}
                suffix={suffix}
            />
        </div>
    )
}

// QuizPercentRunner.defaultProps = {}

// QuizPercentRunner.propTypes = {}

export default React.memo(QuizPercentRunner)