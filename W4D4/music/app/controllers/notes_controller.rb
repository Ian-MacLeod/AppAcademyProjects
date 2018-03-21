class NotesController < AuthenticatedApplicationController
  def create
    @note = Note.new(text: params[:note][:text],
                      user_id: current_user.id,
                      track_id: params[:note][:track_id])

    unless @note.save
      flash[:errors] = @note.errors.full_messages
    end
    redirect_to track_url(params[:note][:track_id])
  end

  def destroy
    @note = Note.find(params[:id])
    if @note.user_id != current_user.id
      render plain: "You can only delete your own notes", status: 403
      return
    end
    unless @note.destroy
      flash[:errors] = ["That note does not exist"]
    end
    redirect_to track_url(@note.track_id)
  end
end
