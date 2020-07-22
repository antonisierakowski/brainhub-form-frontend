import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

type Props = {
  isActive: boolean,
}

export const ProgressIndicator: React.FC<Props> = ({ isActive }: Props) => {
  return isActive && <LinearProgress />
}
