class TracksController < AuthenticatedApplicationController
  def show
    @track = Track.find(params[:id])
    render :show
  end

  def new
    @track = Track.new(album_id: params[:album_id])
    @albums = Album.all
    render :new
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      redirect_to track_url(@track)
    else
      flash.now[:errors] = @track.errors.full_messages
      @albums = Album.all
      render :new
    end
  end

  def edit
    @track = Track.find(params[:id])
    @albums = Album.all
    render :edit
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      redirect_to track_url(@track)
    else
      flash.now[:errors] = @track.errors.full_messages
      render :edit
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @album = @track.album
    if @track
      @track.destroy
    else
      flash[:errors] = ["That track does not exist"]
    end
    redirect_to album_url(@album)
  end

  private

  def track_params
    params.require(:track).permit(:title, :ord, :album_id, :lyrics, :is_bonus)
  end
end
